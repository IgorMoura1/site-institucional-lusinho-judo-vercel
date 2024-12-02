import React from "react";
import Card from "../card";
import "./styles.css";

import Kevin from "./assets/kevin1.jpg";
import Professor1 from "./assets/kevin1.jpg";
import Professor2 from "./assets/teacher1.png";
import Professor3 from "./assets/teacher2.png";

export default function Teachers() {
    const teachers = [
        {
            name: "Jhonatan Dionizio",
            description: "Responsável pela parte de formação física dos atletas, com um foco inicial em adultos. Ele traz uma vasta experiência em condicionamento físico, ajudando os atletas a melhorar sua força, resistência e flexibilidade. Gustavo trabalha de perto com os judocas para garantir que estejam em excelente forma física.",
            photo: Professor1,
            appearance: "um homem de pele clara, cabelo curto e olhos castanhos",
        },
        {
            name: "Kevin Peters",
            description: "Seu foco está na formação de atletas mirins, promovendo o desenvolvimento técnico e físico desde uma idade jovem. Kevin é conhecido por sua abordagem pedagógica, criando um ambiente de aprendizado divertido e disciplinado. Tendo como objetivo, tornar seus jovens alunos a serem campeões e cidadãos exemplares.",
            photo: Kevin,
            appearance: "um homem jovem de pele clara, cabelo castanho loiro, vestindo um kimono de judo olhando para frente",
        },
        {
            name: "Eduardo Prandini",
            description: "Responsável pelo ensino de judô tanto para crianças quanto para adultos. Professor experiente, tendo conquistado diversas competições estaduais em sua carreira. Eduardo se dedica a transmitir os valores e técnicas do judô, ajudando seus alunos a alcançar seu pleno potencial tanto dentro quanto fora do tatame.",
            photo: Professor2,
            appearance: "um homem de pele morena, cabelo medio cacheado e está sorrindo",
        },
    ];

    return (
        <div className="backgroundTeachers">
            <div className="contentTeacher">
                <h1>PROFESSORES:</h1>
                <div className="cardContainer">
                    {teachers.map((teacher, index) => (
                        <Card
                            key={index}
                            name={teacher.name}
                            description={teacher.description}
                            photo={teacher.photo}
                            appearance={teacher.appearance}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
