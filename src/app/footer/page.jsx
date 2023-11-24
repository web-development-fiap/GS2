// Footer.js
import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    const students = [
      { name: 'Luana Duque', rm: 'RM550813', role: 'Back-end' },
      {
        name: 'Mary Araújo Moreira Speranzini',
        rm: 'RM550242',
        role: 'Desenvolvedor de Software de IA',
      },
      { name: 'Elen Cabral', rm: 'RM98790', role: 'Back-end' },
      { name: 'Felipe Zambello Silva', rm: 'RM99843', role: 'Banco de Dados' },
      { name: 'Luigi Exposito Uchiyama', rm: 'RM99520', role: 'Front-end' },
    ];
  
    return (
        <div className={styles.footer}>
          {students.map((student) => (
            <div className={styles['studentInfo']} key={student.rm}>
              <p>
                {student.name} ({student.rm}) - {student.role}
              </p>
            </div>
          ))}

         