using System;
using System.Net.Http;
using Newtonsoft.Json.Linq;

namespace External_PokemonApi
{
    public class GetPokemon
    {
        public Uri BaseUri = new Uri("https://pokeapi.co/api/v2/");

        public class Pokemon
        {
            public string name { get; set; }

        }
        public string getPokeName()
        {

            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = BaseUri;
                Random random = new Random();
                int randomChooser = random.Next(1, 151);
                var response = client.GetAsync($"pokemon/{randomChooser}");
                response.Wait();

                var result = response.Result;

                if (result.IsSuccessStatusCode)
                {
                    var data = result.Content.ReadAsStringAsync();
                    data.Wait();

                    string pokeData = data.Result;

                    JObject pokeObject = JObject.Parse(pokeData);

                    JToken json_pokeName = pokeObject["species"]["name"];

                    Pokemon pokemon = new Pokemon() { name = json_pokeName.ToString() };

                    return pokemon.name;
                }
                else
                    return null;
            }
        }
    }
}
