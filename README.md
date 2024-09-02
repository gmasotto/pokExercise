# PokExercise

To honor the world pokemon champion [Luca Ceribelli](https://www.fanpage.it/innovazione/tecnologia/luca-campione-mondiale-di-pokemon-a-fanpage-non-rispondo-agli-insulti-per-il-futuro-ho-altri-piani/) for this exercise, I decided to use the pokemon API

To start application: 
```bash
npm install 
npm run dev 

```
## Consideration:
 
  ### #1 Comments:
In this project there are a lot of comments. I wrote what i would do in a real world scenario. In this exercise i used assumption to make the exercise faster to complete.

  ### #2 pokemon api:
  The api list of for fetch pokemon list return a list of object made as following:
  ```js
  {
    "count": 1302,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        ....
    ]
  }
  ```
  In result we have an array of name and url. to fetch data to get type and image i have to do anohter api call to get it... not efficient. I took only first generation of pokemon to stay simple.   
  I used react query to fetch the function and set the data in the store.

### #3 Storage
I use Zustand as store manager. I want to direct access to the pokemon's detail by url after the first fetch.   
The store let me gain the data without another api call. If i cant find the pokemon i go in notfound page.

### #4 Add and Edit
With pokemon Api i could not send new data or edited data. So i skip this part. I would use a post to add data and a patch or post to edit data (it depends on how Be accept the edit). 

### #5 Testing
I tested only the characteristics component and check if the default component load correctly.   
In order to get the element I used data-cy to be sure anyone knows for what it's used .

To start component testing open the gui with the following:
```bash
npx cypress open
 ```
Only component testing is configured and work only for 1 component.

