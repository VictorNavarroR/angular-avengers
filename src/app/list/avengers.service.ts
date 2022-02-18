import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  public avengers = [
    {
      hero: 'Spider-Man',
      name: 'Peter Benjamin Parker',
      link: 'http://marvel.com/characters/54/spider-man',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey02_ons_var_dsk_01.jpg',
      history: 'Peter Parker es hijo de Richard y Mary Parker, agentes de la CIA y posteriormente de S.H.I.E.L.D.. Su última misión infiltrarse como agentes dobles de la organización de Fabio Vicentinni, que tomó el nombre de Red Skull, el gran enemigo de Captain America. Albert averiguó sus planes y provocó un accidente aéreo que acabó con sus vidas. Después de que sus padres murieran, el pequeño Peter quedó al cuidado de sus tíos May y Ben Parker, que vivían en Forest Hills, un barrio de Queens, en Nueva York. Con el tiempo Peter Parker se convirtió en un joven estudiante, amante de la ciencia, tímido y bastante inadaptado de 16 años, quien aguanta las bromas de sus compañeros de colegio (sobre todo las bromas de Flash Thompson, la estrella del equipo de fútbol americano del instituto, y el chico mas popular que salía con Liz Allen).',
      isActive: false
    },
    {
      hero: 'Scarlet Witch',
      name: 'Wanda Maximoff',
      link: 'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_mnt_02_0.jpg',
      history:'Wanda Maximoff alias la Bruja Escarlata es una hechicera romaní Transiana. Hechicera y la hermana gemela menor del velocista Quicksilver. Se creía que ella y su hermano eran hijos Mutantes de Magneto el "Maestro del Magnetismo". En realidad era una huérfana que fue mejorada por el Alto Evolucionador en el Monte Wundagore convirtiéndose en un conducto de Magia del Caos que le permitía manipular la probabilidad y deformar la propia realidad. Wanda fue entrenada por Agatha Harkness para convertirse en una de las más poderosas magas de la Tierra.',
      isActive: false
    },
    {
      hero: 'HULK',
      name: 'Robert Bruce Banner',
      link: 'http://marvel.com/characters/25/hulk',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_mnt_02.jpg',
      history:'Robert Bruce Banner (hulk) era un científico que trabajaba en una bomba de radiación Gamma para el ejercito estadounidense. Entonces, Bruce se dió cuenta de que un joven llamado Rick Jones había entrado al campo de pruebas. Banner salió corriendo para salvar al muchacho y heroicamente lo empujó a una zanja de protección que le salvó la vida a Rick, pero Bruce quedó expuesto a cantidades extremas de radiación Gamma que alteraron la estructura de su ADN. ',
      isActive: false
    },
    {
      hero: 'Black Widow',
      name: "Natalia 'Natasha' Alianovna Romanova",
      link: 'http://marvel.com/characters/6/black_widow',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_pwr_01.jpg',
      history:'Natasha nació en Stalingrado (ahora Volgogrado), Rusia. La primera y más conocida Viuda Negra, es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca y apodada "Piquete de la Viuda".',
      isActive: false
    },
    {
      hero: 'Doctor Strange',
      name: 'Stephen Strange',
      link: 'https://www.marvel.com/characters/doctor-strange-stephen-strange',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_pwr_02.jpg',
      history:'Stephen Strange era un neurocirujano de gran talento que sólo amaba dos cosas de este mundo: su dinero y a sí mismo. Para su desgracia, un accidente automovilístico destruye su carrera al lesionar sus manos. Después de intentar por varios medios, Stephen recurre a un ser místico conocido como el Anciano con la esperanza de recuperar lo perdido. Pero debido a la arrogancia pasada, el Anciano rechaza a Strange. A punto de abandonar el Santuario, es testigo de cómo el alumno del Anciano, intenta acabar con su mentor usando la magia negra. Al conjurar la amenaza, el Anciano toma a Stephen como su alumno.',
      isActive: false
    },
    {
      hero: 'Captain America',
      name: 'Steven Rogers',
      link: 'http://marvel.com/characters/8/captain_america',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_mnt_03.jpg',
      history:'Cpt. Steven "Steve" Rogers también conocido como Captain America,  el primer vengador, fue rechazado por el Ejército de los Estados Unidos durante la Segunda Guerra Mundial debido a numerosos problemas de salud. Finalmente se ofreció como voluntario para el Proyecto Renacimiento donde recibió el Suero del Súper Soldado desarrollado por Dr. Abraham Erskine. El suero realzó enormemente su frágil cuerpo hasta la cima de la fisicalidad humana.  Como el Centinela de la Libertad,  junto a su mejor amigo Bucky Barnes y los Invasores, Rogers y otros ayudaron a los aliados a ganar la guerra, pero no antes de que se perdiera en el mar y se congelara en el hielo en una forma de animación suspendida durante décadas.',
      isActive: false
    },
    {
      hero: 'Iron Man',
      name: "Anthony Edward 'Tony' Stark",
      link: 'http://marvel.com/characters/29/iron_man',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_pwr_03.jpg',
      history:'Tony Stark es un genio inventor y multimillonario industrial, que se enfunda en su armadura de tecnología punta para convertirse en el superhéroe Iron Man. Hijo adoptivo del fabricante de armas Howard Stark,  Tony heredó la empresa de su familia a una edad temprana tras la muerte de sus padres. Mientras supervisaba una planta de fabricación en un país extranjero, Stark fue secuestrado por terroristas locales. En lugar de ceder a las exigencias de sus captores para construir armas para ellos, Stark creó una poderosa armadura para poder escapar.[48] De vuelta a América, Stark mejoró la armadura y puso sus vastos recursos y su intelecto al servicio de la mejora del mundo como Iron Man.',
      isActive: false
    },
    {
      hero: 'THOR',
      name: 'Thor Odinson',
      link: 'http://marvel.com/characters/60/thor',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
      bgImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_pwr_03_0.jpg',
      history:'Thor es el Dios del Trueno, miembro de la raza conocida como los Asgardianos, un grupo de seres humanoides de la Dimensión de Bolsillo de Asgard, el Reino Eterno. Thor es el hijo de Odin, el Padre de Todo y rey de Asgard. Fue adorado por los humanos conocidos como vikingos y pasó a formar parte de la Mitología nórdica. Armado con su martillo Uru encantado Mjolnir, que le ayuda a canalizar sus energías divinas, se convirtió en el guerrero más poderoso de los Diez Reinos. Cuando su comportamiento irresponsable e impetuoso fue demasiado, Odín lo envió a Midgard (más conocido como Tierra) como un estudiante de medicina mortal discapacitado llamado Donald Blake, despojado de su memoria. Después de aprender a ser humilde, recuperó su memoria así como sus poderes divinos.',
      isActive: false
    },
  ];

  constructor() { }
}
