import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results
        .map(
          character => `
          <article class="Character-item">
            <div class="row">
              <div class="col">
                <div class="card">
                    <a href="#/${character.id}/">
                      <div class="card-image">
                        <img src="${character.image}" alt="${character.name}" />
                      </div>
                      <div class="card-action">
                        <h5>${character.name}</h5>

                      </div>
                  </a>
                </div>
              </div>
            </div>
          </article>
          `
        )
        .join('')}
		</div>
	`;
  return view;
};

export default Home;
