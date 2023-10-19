import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import { HomeWrapper, MainContent, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';

const SocialLink = (props) => (
    <a target="_blank" rel="noopener_noreferrer" href={props.url}>
        {props.children}
    </a> 
)

const funFacts = [
    'React Enthusiast',
    'Budding Board Gamer',
    'Door Dash Premium Member',
    'Novice Mech Pilot',
    'A fifth one'
];


const funFactsBuilder = (length = 2) => {
    const facts = funFacts
    .map(fact => ({fact, randPos: Math.random()}))
    .sort((a,b) => a.randPos - b.randPos)
    .map(factObject => factObject.fact)
    .slice(0, length)
    .join(' | ');

    return facts.toString();
}

export const Home = () => (
    <HomeWrapper>
        <NavBar />
        <MainContent>
            <Avatar picture="images/mark-color.jpg"></Avatar>
            <Greeting>Sup Dr. Veras, I'm Thomas Nguyen!</Greeting>
            <Hobbies>{funFactsBuilder()}</Hobbies>
            <SocialLinks>
                <SocialLink url="https://www.instagram.com/phocisticks">
                    <InstagramIcon style={{fontSize: 48}} />
                </SocialLink>
                <SocialLink url="https://www.github.com/phocisticks">
                    <GitHubIcon style={{fontSize: 48}} />
                </SocialLink>
            </SocialLinks>
        </MainContent>
    </HomeWrapper>
);