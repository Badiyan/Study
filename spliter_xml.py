#Given a text string variable with the piece of XML:
property_transfer_xml = """
<con:name>AuthTocken</con:name><con:sourceType>Response</con:sourceType><con:sourceStep>login</con:sourceStep><con:sourcePath>declare namespace ns1='urn:Magento';
//ns1:loginResponse/loginReturn[1]</con:sourcePath><con:targetType>Request</con:targetType><con:targetStep>multiCall</con:targetStep><con:targetPath>declare namespace urn='urn:Magento';
//urn:multiCall/sessionId['?']</con:targetPath>"""
p = property_transfer_xml
sourcePath = p.split('sourcePath')[1].split('//')[0][1:]
targetPath = p.split('targetPath')[1].split('//')[0][1:]
print(type(p))
print(len(sourcePath))
print(len(targetPath))
print(sourcePath)
print(targetPath)