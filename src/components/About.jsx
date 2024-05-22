import React from 'react';

const List = ({title, items}) => (
  <ul>
    <li className="font-bold font-founders text-5xl text-[#212121]  pb-3">{title}</li>
    {items.map(item => <li className="text-sm  font-neue text-[#212121] mb-1">{item}</li>)}
  </ul>
);

function About() {
  return (
    <div className='w-full py-20 bg-[#f1f1f1]  rounded-tl-3xl rounded-tr-3xl'>
      <div className='flex justify-between py-10 px-32'>
        <List title="Important Links" items={["About Us", "Work with us"]} />
        <List title="Study Abroad" items={["Study in USA", "Study in Germany", "Study in England", "Study in Canada", "Study in Australia"]} />
        <List title="Test Prep" items={["IELTS", "DUOLINGO", "GRE", "GMAT", "TOEFL", "SAT", "PTE"]} />
        <List title="Offerings" items={["Loans", "Scholarships"]} />
        <List title="Other Links" items={["Privacy Policy"]} />
        <List title="Contacts" items={["Contacts us", "FAQ's"]} />
      </div>
      <div className='flex justify-between py-10 px-32'>
        <List title="Hyderabad Headquarter" items={["Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad"]} />
        <List title="Nagpur Headquarter" items={["Suvidha Overseas, Annamod, Santnagar, Khaperkheda - Nagpur, Maharashtra 441102"]} />
      </div>
    </div>
  );
}

export default About;
