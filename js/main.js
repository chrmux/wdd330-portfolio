const links = [
    {
      label: "Week1 notes",
      url: "week-1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week-2/week02.html"
    },

    {
      label: "Week3 notes",
      url: "week-3/week03.html"
    }


  ];
  





  
const worklist = document.getElementById('listwork');

for(let i = 0; i < links.length; i++) {
    const menu = document.createElement('li');
    const link = document.createElement('a');
    link.href = links[i].url;
    link.innerHTML = links[i].label;
    menu.appendChild(link);
    worklist.appendChild(menu);
}
              