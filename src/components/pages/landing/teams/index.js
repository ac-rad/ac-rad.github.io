import React from 'react';
import CardGrid from './CardGrid';
import Card from './card';
import { CurrentExecInfo } from './memberInfo/teamInfo';
import { MemberCardInfo } from './memberInfo/MemberCardInfo.js';
import { FormerExecutiveCardInfo } from './memberInfo/FormerExecutiveCardInfo.js';

const currentExecCards = CurrentExecInfo.map((memberData) => {
    return (
        <Card
            card={{
                image: memberData.image,
                name: memberData.name,
                position: memberData.position,
                discipline: memberData.discipline,
            }}
        />
    );
});

const memberCards = MemberCardInfo.map((memberData) => {
    return (
        <Card
            card={{
                image: memberData.image,
                name: memberData.name,
                position: memberData.position,
                discipline: memberData.discipline,
            }}
        />
    );
});

const formerExecCards = FormerExecutiveCardInfo.map((memberData) => {
    return (
        <Card
            card={{
                image: memberData.image,
                name: memberData.name,
                position: memberData.position,
                discipline: memberData.discipline,
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
                        <p className="blackHeader">Current Executives</p>
                    </div>
                <div className="CardGridContainer">
                    <CardGrid cards={currentExecCards} />
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
            <div className="FormerCardContainer">
                <div className="FormerExecBorderContainer">
                    <p className="WhiteHeader">Former Executives</p>
                </div>
                <div className="CardGridContainer">
                    <CardGrid cards={formerExecCards} />
                </div>
            </div>
        </div>
    );
};

export default index;
