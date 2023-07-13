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
                className: 'text-white',
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
                className: 'text-white',
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
                className: 'text-white',
            }}
        />
    );
});

const index = () => {
    return (
        <div id="teams" className="bg-themeNavy">
            <div className="ExecCardContainer bg-inherit">
                <div className="ExecTitleBorderContainer bg-inherit">
                    <p className="blackHeader text-white">Current Executives</p>
                </div>
                <div className="CardGridContainer bg-inherit">
                    <CardGrid cards={currentExecCards} />
                </div>
            </div>
            <div className="GeneralCardContainer bg-inherit">
                <div className="GeneralMemberBorderContainer bg-inherit">
                    <p className="BlackHeader text-white">Current Members</p>
                </div>
                <div className="CardGridContainer bg-inherit">
                    <CardGrid cards={memberCards} />
                </div>
            </div>
            <div className="FormerCardContainer bg-inherit">
                <div className="FormerExecBorderContainer bg-inherit">
                    <p className="WhiteHeader text-white">Former Executives</p>
                </div>
                <div className="CardGridContainer bg-inherit">
                    <CardGrid cards={formerExecCards} />
                </div>
            </div>
        </div>
    );
};

export default index;
