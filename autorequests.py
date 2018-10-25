import json
import requests
url="http://qa111.111.com/candidates"
headers = {'Content-Type': "application/json"}
body = json.dumps({'name': 'VBagrov','position':'kvaziqa'})
i = 0
print('_'*10,'AUTO POST GET DELETE  REQUESTS','_'*10)
#POST-----------------------------POST---------------------------------------POST
print('FOR POST:')
while i < 11:
 response = requests.post(str(url),headers=headers,data=body)
 print('_'*50,'Posted:',response.json(),'_'*50,sep='\n')
 i = i + 1
#GET-------------------------------GET---------------------------------------GET
print('FOR GET (0-199):')
for n in range(200):
 url1=str(url) + '/' + str(n)
 response = requests.get(str(url1),headers=headers)
 if response.status_code == 200:
  print('_'*50,str(url1),response.status_code,response.json(),'_'*50,sep='\n')
 if  response.status_code == 404:
  print('_'*50,str(url1),response.status_code,'Incorrect URL','_'*50,sep='\n')
#DELETE---------------------------DELETE------------------------------------DELETE
print('FOR DELETE (semiauto):')
for n in range(172,193):
 url2=str(url) + '/' + str(n)
 response = requests.delete(str(url2),headers=headers)
 print('_'*50,'Deleted:',str(url2),response.status_code,response.json(),'_'*50,sep='\n')