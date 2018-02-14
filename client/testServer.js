const url = 'localhost:3001'

const testPost = fetch(url + "/posts", { headers: { 'Authorization': 'helloworld' }});
									.then((res) => console.log(res));
