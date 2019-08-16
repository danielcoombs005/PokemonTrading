using System;
using System.Net.Http;
using Newtonsoft.Json.Linq;

namespace External_PokemonApi
{
    public class GetPokemon
    {
        public Uri BaseUri = new Uri("https://pokeapi.co/api/v2/");

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

                    //WeatherJSON weatherJson = results.ToObject<WeatherJSON>();
                    //Weather weather = new Weather() { type = weatherJson.main, description = weatherJson.description };

                    //return weather;
                }
            }
            return "ok";
        }
        //need to get pokemon info
        //then transfer information to our trading api.
    }
}
