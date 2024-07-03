import React from "react";
import { useState } from "react";
import Panels from "./Panels";

function Accordeon() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="accordeon-panel">
            <Panels
                title='LOréal-UNESCO For Women in Science'
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                Women scientists are leading ground-breaking research across the world. But despite their remarkable discoveries, women still represent just 33,3 %* of researchers globally, and their work rarely gains the recognition it deserves. Less than 4 % of Nobel Prizes for science have ever been awarded to women, and only 11 %* of senior research roles are held by women in Europe.
                As the world hurtles towards a future threatened by climate change and resource scarcity, the global scientific community must lose no time in recognising and promoting women scientists’ achievements.
                The Fondation LOréal and UNESCO have worked together for more than 20 years to help empower more women scientists to achieve scientific excellence and participate equally in solving the great challenges facing humanity.
                To date, we have awarded more than 100 laureates, five of whom have gone on to win Nobel Prizes.
                Working in the Physical sciences, Formal sciences and Life sciences on five different continents, these eminent women researchers are helping to change the world through their discoveries, and are also role models for younger generations of women researchers who want to pursue their scientific careers and break the glass ceiling.
                Each year, the L'Oréal-UNESCO For Women in Science programmes also support more than 250 talented young women researchers. Through its 52 regional and national programmes, the Fondation LOréal and UNESCO support them at a crucial period in their careers, during their thesis or post-doctoral studies.
            </Panels>
            <Panels
                title='Conclusion'
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                However, we must remember that there is still much more to be done to achieve true gender equality in science. But we remain determined, and we are moving steadily towards making our vision a reality. One day, we will live in a world where girls are encouraged to study science, where women have adequate support to balance the responsibilities of research and motherhood, and where scientists are judged purely on the merit of their discoveries and the potential of their work to change the world.
            </Panels>
        </div>
    );
}

export default Accordeon;