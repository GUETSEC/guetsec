import React from 'react';
import Layout from '@theme/Layout';
import members from '../data/members.data';
import TeamMemberProfileCard from '../components/TeamMemberProfileCard';

function MemberList() {
  // 按年级分组成员
  const membersByGrade = members.reduce((acc, member) => {
    const grade = member.grade || '未分组';
    if (!acc[grade]) {
      acc[grade] = [];
    }
    acc[grade].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  // 按年级降序排序（最新年级在前）
  const sortedGrades = Object.keys(membersByGrade).sort((a, b) => {
    if (a === '未分组') return 1;
    if (b === '未分组') return -1;
    return b.localeCompare(a);
  });

  return (
    <div>
      {sortedGrades.map(grade => (
        <div key={grade} className="margin-bottom--xl">
          <h2 className="text--center margin-bottom--lg">{grade}</h2>
          <div className="row text--center">
            {membersByGrade[grade].map(member => (
              <TeamMemberProfileCard
                key={member.name}
                className={'col col--3 margin-bottom--md'}
                name={member.name}
                avatar={member.avatar}
                children={member.description}
                blogUrl={member.blogUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MembersWall() {
    return (
      <Layout title="团队成员">
        <main>
          <div className="text--center margin-vert--lg">
            <h1>团队成员</h1>
            <p>这里不仅有团队成员，也有志同道合的朋友们</p>
          </div>
          <div className="container">
            <MemberList />
          </div>
        </main>
      </Layout>
    );
  }
  
  export default MembersWall;