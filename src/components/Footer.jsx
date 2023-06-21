import { Icon } from "@iconify/react";

export default function Footer(props) {
  return (
    <section className="flex flex-row mt-3.5 justify-between">
      <span className="font-sans text-xs tracking-tighter pl-6 text-slate-500">Designed and Coded by Alex Wang</span>
      <div className="flex pr-6 gap-2">
        <a href="https://github.com/MarkLumenAW/FCC_Frontend_Project_3_DrumMachine" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" color="#6B727F" width="1rem" />
        </a>
        <a href="https://www.linkedin.com/in/pengcheng-wang-0412b0151/" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" color="#6B727F" width="1rem" />
        </a>
      </div>
    </section>
  );
};
