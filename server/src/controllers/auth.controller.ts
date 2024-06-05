import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { LoginUserDTO } from '../dtos/login.dto';
import { RecoverPasswordDTO } from '../dtos/recover-password.dto';
import { ResetPasswordDTO } from '../dtos/reset-password.dto';

const authService = new AuthService();

export const login = async (req: Request, res: Response): Promise<void> => {
    const loginUserDTO: LoginUserDTO = req.body;
    try {
        const { user, token } = await authService.login(loginUserDTO);
        res.status(200).json({ user, token });
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const recoverPassword = async (req: Request, res: Response): Promise<void> => {
    const recoverPasswordDTO: RecoverPasswordDTO = req.body;
    try {
        await authService.recoverPassword(recoverPasswordDTO);
        res.status(200).json({ message: 'Password reset link sent to your email' });
    } catch (error:any) {
        res.status(400).json({ message: error.message });
  }
}

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    const resetPasswordDTO: ResetPasswordDTO = req.body;
    try {
        await authService.resetPassword(resetPasswordDTO);
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
}
