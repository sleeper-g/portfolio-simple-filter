// @ts-check
import { useState } from 'react';
import Toolbar from './Toolbar.tsx';

interface Project {
  img: string;
  category: string;
}

const Portfolio = () => {
  const [filters] = useState<string[]>(['All', 'Websites', 'Flayers', 'Business Cards']); // Список категорий фильтров
  const [selected, setSelected] = useState<string>('All'); // default active filter
  const [projects] = useState<Project[]>([{
    img: "./src/components/img//mon.jpg",
    category: "Business Cards"
  }, {
    img: "./src/components/img/200.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "./src/components/img/place200x290.png",
    category: "Websites"
  }, {
    img: "./src/components/img/200.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "./src/components/img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "./src/components/img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "./src/components/img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "./src/components/img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "./src/components/img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "./src/components/img/place200x290_3.png",
    category: "Flayers"
  }]);

  const filteredProjects = selected === 'All' ? projects: projects.filter(project => project.category === selected);

  const handleSelectFilter = (filter: string): void => {
    setSelected(filter);
  };

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={handleSelectFilter}
      />
      <div>
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className='portfolio-item'>
              <img src={project.img} alt={project.category}/>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
