import { LoginUserDTO } from "../dtos/login.dto";
import { RecoverPasswordDTO } from "../dtos/recover-password.dto";
import { User } from "../entities/user.entity";
import { encrypt } from "../helpers/encrypt";
import { UserRepository } from "../repositories/user.repository";
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import { generateResetToken } from "../helpers/crypto";
import { sendEmail } from "../utils/email";
import { ResetPasswordDTO } from "../dtos/reset-password.dto";
import { MoreThan } from "typeorm";

export class AuthService {
    async login(loginUserDTO: LoginUserDTO): Promise<{ user: User; token: string }> {
        const { email, password } = loginUserDTO;
        const user = await UserRepository.findOneBy({ email });
        const isPasswordValid = encrypt.comparePassword(user.password, password);
        if (!user || !isPasswordValid) {
          throw new Error('Invalid credentials');
        }
        const token = this.generateToken(user);
        return { user, token };
    }

    async recoverPassword(recoverPasswordDTO: RecoverPasswordDTO): Promise<void> {
      const { email } = recoverPasswordDTO;
      const user = await UserRepository.findOneBy({ email });
      if (!user) {
        throw new Error('User with this email does not exist');
      }
  
      const { resetToken, hashedToken } = generateResetToken();
  
      user.resetPasswordToken = hashedToken;
      user.resetPasswordExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutos
      await UserRepository.save(user);
  
      const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
      await sendEmail({
        to: user.email,
        subject: '[Recover Password] BumeranP2P',
        html: `Your password reset token (is valid for 5 minutes). Click the link to reset your password: <a href="${resetURL}">${resetURL}</a>`,
      });
    }

    async resetPassword(resetPasswordDTO: ResetPasswordDTO): Promise<void> {
      const { token, newPassword } = resetPasswordDTO;
  
      const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
      const user = await UserRepository.findOne({
        where: {
          resetPasswordToken: hashedToken,
          resetPasswordExpires: MoreThan(new Date()),
        },
      });
  
      if (!user) {
        throw new Error('Token is invalid or has expired');
      }
  
      user.password = await encrypt.encryptPassword(newPassword);
      user.resetPasswordToken = null;
      user.resetPasswordExpires = null;
      await UserRepository.save(user);
    }

    generateToken(user: User): string {
      return jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
    }
}