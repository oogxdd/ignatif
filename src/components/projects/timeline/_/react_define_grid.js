// const TimelineWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(${(2023 - 1997 + 1) * 12}, 1fr);
// `;

// // ...

// {sampleData.filter(filterProjects).map(project => {
//   const startYear = new Date(project.startDate).getFullYear();
//   const startMonth = new Date(project.startDate).getMonth();
//   const endYear = new Date(project.endDate).getFullYear();
//   const endMonth = new Date(project.endDate).getMonth();

//   const gridColumnStart = (startYear - 1997) * 12 + startMonth + 1;
//   const gridColumnEnd = (endYear - 1997) * 12 + endMonth + 2;

//   return (
//     <div className={`project ${fieldColors[project.fields[0]]}`} data-tip={project.name} data-for="projectTip" style={{ gridColumn: `${gridColumnStart} / ${gridColumnEnd}` }}>
//       {project.fields.map((field, index) => (
//         <div className={fieldColors[field]} style={{ flex: 1 }} />
//       ))}
//     </div>
//   );
// })}
