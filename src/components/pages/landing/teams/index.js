import React from 'react';
import CardGrid from './CardGrid';
import Card from './card';
import { Members } from './memberInfo/Member.js';
import { PrincipalInvestigators } from './memberInfo/PI.js';

const principalInvestigatorCards = PrincipalInvestigators.map((memberData) => {
    return (
        <Card
            card={{
                name: memberData.name,
                image: memberData.image,
            }}
        />
    );
});

const memberCards = Members.map((memberData) => {
    return (
        <Card
            card={{
                name: memberData.name,
                image: memberData.image,
                degree: memberData.degree,
            }}
        />
    );
});

const index = () => {
    return (
        
        <div id="teams">
            <section>Teams</section>
            <div className="ExecCardContainer">
                    <div className="ExecTitleBorderContainer">
                        <p className="blackHeader">Principal Investgators</p>
                    </div>
                <div className="CardGridContainer">
                    <CardGrid cards={principalInvestigatorCards} />
                </div>
            </div>
            <div className="GeneralCardContainer">
                <div className="GeneralMemberBorderContainer">
                    <p className="BlackHeader">Current Members</p>
                </div>
                <div className="CardGridContainer">
                    <CardGrid cards={memberCards} />
                </div>
            </div>
            
        </div>
    );
};

export default index;
