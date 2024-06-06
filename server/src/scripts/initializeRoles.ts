import { Role } from '../entities/role.entity';
import { AppDataSource } from '../database/data-source';

const initializeRoles  = async () => {
  const roleRepository = AppDataSource.getRepository(Role);

  const roles = ['admin', 'applicant', 'investor'];

  for (const roleName of roles) {
    const roleExists = await roleRepository.findOne({ where: { name: roleName } });

    if (!roleExists) {
      const role = new Role();
      role.name = roleName;
      await roleRepository.save(role);
      console.log(`Role '${roleName}' has been created.`);
    }
  }
};

export default initializeRoles;