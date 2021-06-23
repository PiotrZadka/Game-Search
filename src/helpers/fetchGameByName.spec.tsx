import fetchGameByName from './fetchGameByName';

test('Check if fetches games by title', () =>{
    return fetchGameByName("Spyro").then(data => {
        expect(data[1].name).toContain("Spyro");
      });
})

