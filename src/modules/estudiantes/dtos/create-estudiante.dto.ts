import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateEstudianteDto {
  @ApiProperty({
    description: 'Nombre del estudiante',
    example: 'Juan',
  })
  @IsString()
  @IsNotEmpty()
  @Length(2, 255)
  nombre: string;

  @ApiProperty({
    description: 'Apellido del estudiante',
    example: 'Pérez',
  })
  @IsString()
  @IsNotEmpty()
  @Length(2, 255)
  apellido: string;

  @ApiProperty({
    description: 'Cédula del estudiante',
    example: '1234567890',
  })
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  cedula: string;
}
