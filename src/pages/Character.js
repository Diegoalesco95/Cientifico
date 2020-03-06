import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
		<div class="Characters-inner">
			<article class="Characters-card">
				<img src="${character.image}" alt="${character.name}" />
				<h2>${character.name}</h2>
			</article>
			<article class="Character-card">
				<h4>Episodes: <span>${character.episode.length}</span></h4>
				<h4>Status: <span>${character.status}</span></h4>
				<h4>Species: <span>${character.species}</span></h4>
				<h4>Gender: <span>${character.gender}</span></h4>
				<h4>Origin: <span>${character.origin.name}</span></h4>
				<h4>Last Location: <span>${character.location.name}</span></h4>
			</article>
		</div>`;
  return view;
};

export default Character;
