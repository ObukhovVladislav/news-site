from requests import post

url = 'http://localhost:8000/api-token-auth/'
user_cred = {'username': 'admin', 'password': 'admin'}
response = post(url, data=user_cred)
resp_data = response.json()
print(resp_data)
