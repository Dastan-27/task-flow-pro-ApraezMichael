import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('estudiantes')
export class Estudiante {
  @ApiProperty({
    format: 'uuid',
    description: 'ID único del estudiante',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Nombre del estudiante',
    example: 'Juan',
  })
  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @ApiProperty({
    description: 'Apellido del estudiante',
    example: 'Pérez',
  })
  @Column({ type: 'varchar', length: 255 })
  apellido: string;

  @ApiProperty({
    description: 'Cédula del estudiante',
    example: '1234567890',
  })
  @Column({ type: 'varchar', length: 20, unique: true })
  cedula: string;

  @ApiProperty({
    format: 'date-time',
    description: 'Fecha y hora de creación del estudiante',
  })
  @CreateDateColumn()
  fechaCreacion: Date;

  @ApiProperty({
    format: 'date-time',
    description: 'Fecha y hora de la última actualización del estudiante',
  })
  @UpdateDateColumn()
  fechaActualizacion: Date;
}
