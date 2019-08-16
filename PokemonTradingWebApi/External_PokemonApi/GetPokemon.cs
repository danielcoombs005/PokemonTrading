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
            public int id { get; set; }
            public string name { get; set; }
            public string type { get; set; }
            public string sprite { get; set; }
            
        }
        public Pokemon getPokeName()
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
                    JToken json_pokeSprite = pokeObject["sprites"]["front_default"];
                    JToken json_pokeType = pokeObject["types"][0]["type"]["name"];

                    Pokemon pokemon = new Pokemon() { name = json_pokeName.ToString(), id = randomChooser, sprite = json_pokeSprite.ToString(), type = json_pokeType.ToString()};

                    return pokemon;
                }
                else
                    return new Pokemon() { name = "NaN", id = 1, sprite = "null", type = "null" };
            }
        }
    }
}
