import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function FAQ(){
    return(
        <Accordion>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Het is één grote puzzel
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                Het is waarschijnlijk een cliché antwoord, maar ik sta er 100% achter. Je hebt een probleem en die moet je oplossen. Ik hou heel erg van puzzelen, dus dat ik programmeren onder andere daarom zo leuk vind, is geen verrassing. En de kick die je krijgt nadat je iets werkende hebt gekregen, is superleuk!
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Je raakt nooit uitgeleerd
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                Dit is een vak waarin je altijd kunt blijven doorleren. Er zijn altijd programmeer-talen die je nog niet kent of nog niet beheerst. Bovendien staat het internet vol met mensen die die specifieke taal zowat als moedertaal hebben aangenomen en is de manier van leren eindeloos. Daarnaast blijft het internet zich ontwikkelen, dus kun je altijd blijven doorleren wanneer je daar behoefte aan hebt.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Ik kan er mijn creativiteit in kwijt
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                Websites zijn al lang niet meer de standaard pagina's die het begin deze eeuw waren. Het zijn soms net kleine kunstwerkjes. Ik kan soms uren op Pinterest of Dribbble kijken voor inspiratie. Mijn website van vroeger werd ook om de haverklap vernieuwd, omdat ik ergens nieuwe inspiratie had opgedaan.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Ik kan anderen ermee helpen om hun idee werkelijkheid te maken
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    Momenteel ben ik bezig om twee mensen in mijn omgeving te helpen met hun website. Dit vind ik een mooi proces. We bespreken goed wat zij in gedachten hebben en met die wensen in mijn achterhoofd ga ik aan de slag! En zo helpen zij mij om mijn portfolio op te bouwen!
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion> 
    )
}
  
export default FAQ;