--- 

title: Platform Of Trust Documentation 

language_tabs: 
   - shell 
   - java
   - python
   - javascript

toc_footers: 
   - Powered by <a href='https://www.platformoftrust.net/services/api-engine'>API Engine</a> 

includes: 
   - feedback
   

search: true 

--- 




# Identity

> **Get Identity related resources:**

> <div class='hexagon'><div class='hexagon-inside'><div class='hexagon-inside2'><a href='./specs/oas/identity.json' title='Get OpenAPI Specification Resources'><img src='images/oas.png' class='openApiSpec-lg'></a></div></div></div>
> <div class='hexagon'><div class='hexagon-inside'><div class='hexagon-inside2'><a href='./specs/raml/identity.zip' title='Get RAML Specification Resources'><img src='images/raml.png' class='ramlSpec-lg'></a></div></div></div>


The Identity API provides means to create, update and delete digital twins
(identities) and manage links between them.
The links provides the direction and type (sometimes called role) of the link.
 

**Version:** v1 

## /identities/v1
### **post** 

**Description:** Create a new identity

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the POST /identities/v1 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: POST /identities/v1 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}
body = {
  "context": "https://standards.lifeengine.io/v1/Context/Identity/Group",
  "type": "Group",
  "data": {
    "name": "Company Oy"
  }
}


response = requests.post(
    'https://api-sandbox.oftrust.net/identities/v1',
    headers=headers,
    json=body
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X POST \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
   -H "Content-Type: application/json" \
   -d \
"{
  \"context\": \"https://standards.lifeengine.io/v1/Context/Identity/Group\",
  \"type\": \"Group\",
  \"data\": {
    \"name\": \"Company Oy\"
  }
}
" "https://api-sandbox.oftrust.net/identities/v1"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}; 
const body = {
  "context": "https://standards.lifeengine.io/v1/Context/Identity/Group",
  "type": "Group",
  "data": {
    "name": "Company Oy"
  }
}
; 

unirest
  .post("https://api-sandbox.oftrust.net/identities/v1")
  .headers(headers)
  .send(body)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1";
			StringEntity params = new StringEntity("{  \"context\": \"https://standards.lifeengine.io/v1/Context/Identity/Group\",  \"type\": \"Group\",  \"data\": {    \"name\": \"Company Oy\"  }}");
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpPost request = new HttpPost(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");
			request.addHeader("Content-Type", "application/json");
			request.setEntity(params);

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 201

{
  "@context": "https://standards.lifeengine.io/v1/Context/Identity/Group",
  "@type": "Group",
  "@id": "58dc29ab-d52e-4aab-a228-9b54e001797c",
  "data": {
    "name": "Company Oy"
  },
  "metadata": {
    "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "createdAt": "2018-02-28T16:41:41.090Z",
    "updatedAt": "2018-02-28T16:41:41.090Z"
  },
  "inLinks": [],
  "outLinks": []
}


```


**POST** /identities/v1 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |
| body | body |  | Yes |  |

<b>Body properties</b>

<font color="red">* - Required property </font> <br>

<ul>
<li>object identity
<ul>
<li>context<font color="red"> *</font> - The URL to the context for this identity
</li>
<li>string type<font color="red"> * </font> - The type of the identity
</li>
<li>object context<font color="red"> * </font> - Additional data for the identity, as defined in the context.
<ul>
<li>string name<font color="red"> *</font> - The name of the identity
</li>
</ul>
</li>
</li>
</ul>
</ul>

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 |  |
| 422 |  |

## /identities/v1/{id}
### **get** 

**Description:** Read one identity by id. Requires the `read` permission on the
identity.


#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the GET /identities/v1/{id} 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: GET /identities/v1/{id} 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}

response = requests.get(
    'https://api-sandbox.oftrust.net/identities/v1/{id}',
    headers=headers
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X GET \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
 "https://api-sandbox.oftrust.net/identities/v1/{id}"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}; 

unirest
  .get("https://api-sandbox.oftrust.net/identities/v1/{id}")
  .headers(headers)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{id}";
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpGet request = new HttpGet(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 200

{
  "@context": "https://standards.lifeengine.io/v1/Context/Identity/Group",
  "@type": "Group",
  "@id": "58dc29ab-d52e-4aab-a228-9b54e001797c",
  "data": {
    "name": "Company Oy"
  },
  "metadata": {
    "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "createdAt": "2018-02-28T16:41:41.090Z",
    "updatedAt": "2018-02-28T16:41:41.090Z"
  },
  "inLinks": [
    {
      "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
      "@type": "MemberOf",
      "@id": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "from": "58dc29ab-d52e-4aab-a228-9b54e001797c",
      "to": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "data": {},
      "metadata": {
        "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "createdAt": "2018-02-28T16:41:41.090Z",
        "updatedAt": "2018-02-28T16:41:41.090Z"
      }
    }
  ],
  "outLinks": [
    {
      "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
      "@type": "MemberOf",
      "@id": "cb40ce78-d3b3-442a-9db7-66f191698b2a",
      "from": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "to": "58dc29ab-d52e-4aab-a228-9b54e001797c",
      "data": {},
      "metadata": {
        "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "createdAt": "2018-02-28T16:41:41.090Z",
        "updatedAt": "2018-02-28T16:41:41.090Z"
      }
    }
  ]
}


```


**GET** /identities/v1/{id} 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The ID of the Identity | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 |  |
| 404 |  |

### **put** 

**Description:** Update an identity by id. Requires the `write` permission on the
identity.


#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the PUT /identities/v1/{id} 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: PUT /identities/v1/{id} 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}
body = {
  "context": "https://standards.lifeengine.io/v1/Context/Identity/Group",
  "type": "Group",
  "data": {
    "name": "Company Oy"
  }
}


response = requests.put(
    'https://api-sandbox.oftrust.net/identities/v1/{id}',
    headers=headers,
    json=body
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X PUT \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
   -H "Content-Type: application/json" \
   -d \
"{
  \"context\": \"https://standards.lifeengine.io/v1/Context/Identity/Group\",
  \"type\": \"Group\",
  \"data\": {
    \"name\": \"Company Oy\"
  }
}
" "https://api-sandbox.oftrust.net/identities/v1/{id}"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}; 
const body = {
  "context": "https://standards.lifeengine.io/v1/Context/Identity/Group",
  "type": "Group",
  "data": {
    "name": "Company Oy"
  }
}
; 

unirest
  .put("https://api-sandbox.oftrust.net/identities/v1/{id}")
  .headers(headers)
  .send(body)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{id}";
			StringEntity params = new StringEntity("{  \"context\": \"https://standards.lifeengine.io/v1/Context/Identity/Group\",  \"type\": \"Group\",  \"data\": {    \"name\": \"Company Oy\"  }}");
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpPut request = new HttpPut(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");
			request.addHeader("Content-Type", "application/json");
			request.setEntity(params);

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 200

{
  "@context": "https://standards.lifeengine.io/v1/Context/Identity/Group",
  "@type": "Group",
  "@id": "58dc29ab-d52e-4aab-a228-9b54e001797c",
  "data": {
    "name": "Company Oy"
  },
  "metadata": {
    "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "createdAt": "2018-02-28T16:41:41.090Z",
    "updatedAt": "2018-02-28T16:41:41.090Z"
  },
  "inLinks": [
    {
      "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
      "@type": "MemberOf",
      "@id": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "from": "58dc29ab-d52e-4aab-a228-9b54e001797c",
      "to": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "data": {},
      "metadata": {
        "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "createdAt": "2018-02-28T16:41:41.090Z",
        "updatedAt": "2018-02-28T16:41:41.090Z"
      }
    }
  ],
  "outLinks": [
    {
      "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
      "@type": "MemberOf",
      "@id": "cb40ce78-d3b3-442a-9db7-66f191698b2a",
      "from": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "to": "58dc29ab-d52e-4aab-a228-9b54e001797c",
      "data": {},
      "metadata": {
        "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "createdAt": "2018-02-28T16:41:41.090Z",
        "updatedAt": "2018-02-28T16:41:41.090Z"
      }
    }
  ]
}


```


**PUT** /identities/v1/{id} 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The ID of the Identity | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |
| body | body |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 |  |
| 404 |  |
| 422 |  |

### **delete** 

**Description:** Delete an identity by id. Requires the `manage` permission on the
identity.


#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the DELETE /identities/v1/{id} 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: DELETE /identities/v1/{id} 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}

response = requests.delete(
    'https://api-sandbox.oftrust.net/identities/v1/{id}',
    headers=headers
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X DELETE \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
 "https://api-sandbox.oftrust.net/identities/v1/{id}"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}; 

unirest
  .delete("https://api-sandbox.oftrust.net/identities/v1/{id}")
  .headers(headers)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{id}";
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpDelete request = new HttpDelete(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 204

{}

```


**DELETE** /identities/v1/{id} 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The ID of the Identity | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 |  |
| 404 |  |
| 422 |  |

## /identities/v1/{from_identity}/link/{to_identity}
### **post** 

**Description:** Creates a new link between two identities

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the POST /identities/v1/{from_identity}/link/{to_identity} 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: POST /identities/v1/{from_identity}/link/{to_identity} 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}
body = {
  "context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
  "type": "MemberOf"
}


response = requests.post(
    'https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}',
    headers=headers,
    json=body
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X POST \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
   -H "Content-Type: application/json" \
   -d \
"{
  \"context\": \"https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf\",
  \"type\": \"MemberOf\"
}
" "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}; 
const body = {
  "context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
  "type": "MemberOf"
}
; 

unirest
  .post("https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}")
  .headers(headers)
  .send(body)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}";
			StringEntity params = new StringEntity("{  \"context\": \"https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf\",  \"type\": \"MemberOf\"}");
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpPost request = new HttpPost(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");
			request.addHeader("Content-Type", "application/json");
			request.setEntity(params);

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 201

{
  "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
  "@type": "MemberOf",
  "@id": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
  "from": "58dc29ab-d52e-4aab-a228-9b54e001797c",
  "to": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
  "data": {},
  "metadata": {
    "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "createdAt": "2018-02-28T16:41:41.090Z",
    "updatedAt": "2018-02-28T16:41:41.090Z"
  }
}


```


**POST** /identities/v1/{from_identity}/link/{to_identity} 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| from_identity | path | The starting identity ID of the link | Yes | string |
| to_identity | path | The ending identity ID of the link | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |
| body | body |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 |  |
| 404 |  |
| 422 |  |

## /identities/v1/{from_identity}/link/{to_identity}/{type}
### **get** 

**Description:** Read a link by type

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the GET /identities/v1/{from_identity}/link/{to_identity}/{type} 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: GET /identities/v1/{from_identity}/link/{to_identity}/{type} 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}

response = requests.get(
    'https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}',
    headers=headers
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X GET \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
 "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}; 

unirest
  .get("https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}")
  .headers(headers)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}";
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpGet request = new HttpGet(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 200

{
  "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
  "@type": "MemberOf",
  "@id": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
  "from": "58dc29ab-d52e-4aab-a228-9b54e001797c",
  "to": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
  "data": {},
  "metadata": {
    "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "createdAt": "2018-02-28T16:41:41.090Z",
    "updatedAt": "2018-02-28T16:41:41.090Z"
  }
}


```


**GET** /identities/v1/{from_identity}/link/{to_identity}/{type} 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| type | path | The `@type` of the link, for example `Link`, `Tenant` or `Owner` | Yes | string |
| from_identity | path | The starting identity ID of the link | Yes | string |
| to_identity | path | The ending identity ID of the link | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 |  |
| 404 |  |

### **put** 

**Description:** Update a link

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the PUT /identities/v1/{from_identity}/link/{to_identity}/{type} 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: PUT /identities/v1/{from_identity}/link/{to_identity}/{type} 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}
body = {
  "context": "https://example.com/contexts/type.jsonld",
  "type": "Owner"
}


response = requests.put(
    'https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}',
    headers=headers,
    json=body
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X PUT \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
   -H "Content-Type: application/json" \
   -d \
"{
  \"context\": \"https://example.com/contexts/type.jsonld\",
  \"type\": \"Owner\"
}" "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "Content-Type": "application/json"
}; 
const body = {
  "context": "https://example.com/contexts/type.jsonld",
  "type": "Owner"
}; 

unirest
  .put("https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}")
  .headers(headers)
  .send(body)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}";
			StringEntity params = new StringEntity("{  \"context\": \"https://example.com/contexts/type.jsonld\",  \"type\": \"Owner\"}");
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpPut request = new HttpPut(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");
			request.addHeader("Content-Type", "application/json");
			request.setEntity(params);

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 201

{
  "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
  "@type": "MemberOf",
  "@id": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
  "from": "58dc29ab-d52e-4aab-a228-9b54e001797c",
  "to": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
  "data": {},
  "metadata": {
    "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
    "createdAt": "2018-02-28T16:41:41.090Z",
    "updatedAt": "2018-02-28T16:41:41.090Z"
  }
}


```


**PUT** /identities/v1/{from_identity}/link/{to_identity}/{type} 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| type | path | The `@type` of the link, for example `Link`, `Tenant` or `Owner` | Yes | string |
| from_identity | path | The starting identity ID of the link | Yes | string |
| to_identity | path | The ending identity ID of the link | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |
| body | body |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 |  |
| 404 |  |
| 422 |  |

### **delete** 

**Description:** Delete a link by type

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the DELETE /identities/v1/{from_identity}/link/{to_identity}/{type} 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: DELETE /identities/v1/{from_identity}/link/{to_identity}/{type} 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}

response = requests.delete(
    'https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}',
    headers=headers
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X DELETE \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
 "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}; 

unirest
  .delete("https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}")
  .headers(headers)
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{from_identity}/link/{to_identity}/{type}";
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpDelete request = new HttpDelete(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 204

{}

```


**DELETE** /identities/v1/{from_identity}/link/{to_identity}/{type} 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| type | path | The `@type` of the link, for example `Link`, `Tenant` or `Owner` | Yes | string |
| from_identity | path | The starting identity ID of the link | Yes | string |
| to_identity | path | The ending identity ID of the link | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 |  |
| 404 |  |
| 422 |  |

## /identities/v1/{id}/links
### **get** 

**Description:** List outbound links for a given identity

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the GET /identities/v1/{id}/links 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: GET /identities/v1/{id}/links 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}

response = requests.get(
    'https://api-sandbox.oftrust.net/identities/v1/{id}/links',
    params='type=%2Fidentities%2F%7Bversion%7D%2F%7Bid%7D%2Flinks%3Ftype%3DOwner',
    headers=headers
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X GET \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
 "https://api-sandbox.oftrust.net/identities/v1/{id}/links?type=%2Fidentities%2F%7Bversion%7D%2F%7Bid%7D%2Flinks%3Ftype%3DOwner"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}; 

unirest
  .get("https://api-sandbox.oftrust.net/identities/v1/{id}/links")
  .headers(headers)
  .query("type=%2Fidentities%2F%7Bversion%7D%2F%7Bid%7D%2Flinks%3Ftype%3DOwner")
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/{id}/links?type=%2Fidentities%2F%7Bversion%7D%2F%7Bid%7D%2Flinks%3Ftype%3DOwner";
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpGet request = new HttpGet(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 200

{
  "@context": "https://schema.org/",
  "@type": "collection",
  "ItemList": [
    {
      "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
      "@type": "MemberOf",
      "@id": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "from": "58dc29ab-d52e-4aab-a228-9b54e001797c",
      "to": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "data": {},
      "metadata": {
        "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "createdAt": "2018-02-28T16:41:41.090Z",
        "updatedAt": "2018-02-28T16:41:41.090Z"
      }
    },
    {
      "@context": "https://standards.lifeengine.io/v1/Context/Link/Role/MemberOf",
      "@type": "MemberOf",
      "@id": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "from": "58dc29ab-d52e-4aab-a228-9b54e001797c",
      "to": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
      "data": {},
      "metadata": {
        "createdBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "updatedBy": "cf0862f6-3f4f-498f-97f1-fbe8b5734448",
        "createdAt": "2018-02-28T16:41:41.090Z",
        "updatedAt": "2018-02-28T16:41:41.090Z"
      }
    }
  ]
}


```


**GET** /identities/v1/{id}/links 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The ID of the identity | Yes | string |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |
| type | query | If given to `GET /identities/v1/{id}/links?type=Owner`, will list only the links of `@type: "Owner"`  | No | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 |  |
| 404 |  |

## /identities/v1/discovery
### **get** 

**Description:** Discover identities in the identity network.

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the GET /identities/v1/discovery 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: GET /identities/v1/discovery 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}

response = requests.get(
    'https://api-sandbox.oftrust.net/identities/v1/discovery',
    params='fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20',
    headers=headers
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X GET \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
 "https://api-sandbox.oftrust.net/identities/v1/discovery?fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}; 

unirest
  .get("https://api-sandbox.oftrust.net/identities/v1/discovery")
  .headers(headers)
  .query("fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20")
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/discovery?fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20";
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpGet request = new HttpGet(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 200

{
  "identities": {
    "eccbcc62-37e2-4014-8233-d077fce7bac9": {
      "@context": "https://standards.oftrust.net/v1/Context/Identity/Device/Sensor/TemperatureSensor/",
      "@type": "TemperatureSensor",
      "@id": "eccbcc62-37e2-4014-8233-d077fce7bac9",
      "data": {
        "name": "Temperature sensor",
        "codeLocal": "local code"
      },
      "metadata": {
        "createdAt": "2019-09-17T12:53:25+00:00",
        "createdBy": "f773dafe-20c0-4a25-aa3e-9da0b81b9304",
        "updatedAt": "2019-09-17T12:53:25+00:00",
        "updatedBy": "f773dafe-20c0-4a25-aa3e-9da0b81b9304"
      }
    }
  },
  "pagination": {
    "links": [
      {
        "rel": "first",
        "href": "https://api-sandbox.oftrust.net/identities/v1/discovery?offset=0&limit=1&fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=3"
      },
      {
        "rel": "self",
        "href": "https://api-sandbox.oftrust.net/identities/v1/discovery?fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=3&offset=0&limit=1"
      },
      {
        "rel": "last",
        "href": "https://api-sandbox.oftrust.net/identities/v1/discovery?offset=173&limit=1&fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=3"
      },
      {
        "rel": "next",
        "href": "https://api-sandbox.oftrust.net/identities/v1/discovery?offset=1&limit=1&fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=3"
      }
    ],
    "hasMore": true,
    "totalCount": 174
  }
}


```


**GET** /identities/v1/discovery 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |
| fromId | query | The starting identity to traverse from, e.g. the Building ID. | Yes | string |
| linkContext | query | The link context to traverse. The context MUST end with a forward slash /.  | Yes | string |
| identityContext | query | The identity context to search for. The context MUST end with a forward slash /.  | Yes | string |
| linkDirection | query | The direction to traverse from the building, one of "IN" or "OUT". When using "IN" it means that the `BelongsTo` links are incoming links towards the Building: (Building) <-- BelongsTo -- (Storey) When using "OUT" it means that the `BelongsTo` links are outgoing from the Building (please note that this is just an example, the data model for buildings and storeys are IN): (Building) -- BelongsTo --> (Storey)  | Yes | string |
| maxDepth | query | The traversal max depth. This means that e.g. maxDepth=3 does three link hops in the traversal: (Building) <-- BelongsTo -- (Storey) <-- BelongsTo -- (Room) <-- BelongsTo -- (Sensor) If searching for `Sensors` but given maxDepth of 2, nothing will be returned since there are 3 links between the building and sensors. This value must be between 1 and 5, but defaults to 2.  | Yes | integer |
| offset | query | The offset used for pagination. Defaults to 0, meaning starting from the first record. Given an offset of 10 means that the next 10 records are returned.  | Yes | integer |
| limit | query | How many records to return, used for pagination. Defaults to 20 records. Given a limit of 100 will return 100 records. This value must be between 1 and 100.  | Yes | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 |  |
| 403 |  |
| 404 |  |
| 422 |  |
| 500 |  |

## /identities/v1/datadiscovery
### **get** 

**Description:** Discover data products in the identity network.

#### http request 
> <div class='hexagon-so'><div class='hexagon-inside-so'><div class='hexagon-inside2-so'><p>Do you need help in using the GET /identities/v1/dataDiscovery 
? </p><li><a href='https://stackoverflow.com/questions/tagged/platform-of-trust' title='Check out Platform of Trust questions and answers in Stack Overflow' target='new'>Checkout existing questions & answers</a></li><li><a href='https://stackoverflow.com/questions/ask?guided=false&tags=platform-of-trust,identity' title='Ask a question in Stack Overflow' target='new'>Ask a question in Stack Overflow</a></li></br><li><a href='https://github.com/PlatformOfTrust/docs/issues/new?assignees=&template=i-m-in-pain--here-s-the-symptoms.md&title=Customer+wish&labels=identity,Wish' title='Make a wish!' target='new'>Did we miss something? Make a wish!</a></li><div style='min-height:30px;'>&nbsp;</div></div></div></div>



 > <b>Example for: GET /identities/v1/dataDiscovery 
</b>

```python
import requests

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}

response = requests.get(
    'https://api-sandbox.oftrust.net/identities/v1/dataDiscovery',
    params='fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20',
    headers=headers
)

print({
    'raw_body': response.text,
    'status': response.status_code,
    'code': response.status_code
})

```

```shell
curl -i -X GET \
   -H "Authorization: Bearer <ACCESS_TOKEN>" \
 "https://api-sandbox.oftrust.net/identities/v1/dataDiscovery?fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20"

```

```javascript
const unirest = require("unirest");

const headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>"
}; 

unirest
  .get("https://api-sandbox.oftrust.net/identities/v1/dataDiscovery")
  .headers(headers)
  .query("fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20")
  .then(({ raw_body, status, code }) => {
    // output response to console as JSON
    console.log(JSON.stringify({ raw_body, status, code }, null, 4));
  });

```

```java
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.StatusLine;

public class Java {
	public static void main(String[] args) {
		try {
			String path = "https://api-sandbox.oftrust.net/identities/v1/dataDiscovery?fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=2&offset=10&limit=20";
			String Value;

			HttpClient httpClient = HttpClientBuilder.create().build();
			HttpGet request = new HttpGet(path);
			request.addHeader("Authorization", "Bearer <ACCESS_TOKEN>");

 			HttpResponse response = httpClient.execute(request);
			try {
				Value = EntityUtils.toString(response.getEntity()).toString();
				if (Value.charAt(0) != '{' && Value.charAt(0) != '[')
					Value = "\"" + Value + "\"" ;
			} catch (Exception ex) {
				Value = "{}";
			}

			StatusLine status = response.getStatusLine();
			System.out.printf("{\"raw_body\":%s,\n\"status\":\"%s\",\n\"code\":\"%s\"}", Value, status, status.getStatusCode());
		} catch (Exception ex) {
			ex.printStackTrace();
		} 
	}
}
```

> The above example should return `JSON` structured like this:

```json
The above example should return JSON structured like this:

HTTP/1.0 200

{
  "dataProducts": {
    "data-product-product-code": {
      "eccbcc62-37e2-4014-8233-d077fce7bac9": "sensor id 1",
      "958f5881-ee48-4a5a-a6ed-bad100ec72ac": "sensor id 2"
    }
  },
  "pagination": {
    "links": [
      {
        "rel": "first",
        "href": "https://api-sandbox.oftrust.net/identities/v1/dataDiscovery?offset=0&limit=10&fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=3"
      },
      {
        "rel": "self",
        "href": "https://api-sandbox.oftrust.net/identities/v1/dataDiscovery?fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=3&offset=0&limit=10"
      },
      {
        "rel": "last",
        "href": "https://api-sandbox.oftrust.net/identities/v1/dataDiscovery?offset=0&limit=10&fromId=fc3bced4-a132-4293-9240-4d0f02277e2e&linkContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FLink%2FBelongsTo%2F&identityContext=https%3A%2F%2Fstandards.oftrust.net%2Fv1%2FContext%2FIdentity%2FDevice%2FSensor%2F&linkDirection=IN&maxDepth=3"
      }
    ],
    "hasMore": false,
    "totalCount": 2
  }
}


```


**GET** /identities/v1/dataDiscovery 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header | The Authorization header, MUST be `Bearer {{access_token}}` | Yes | string |
| fromId | query | The starting identity to traverse from, e.g. the Building ID. | Yes | string |
| linkContext | query | The link context to traverse. The context MUST end with a forward slash /. type: string example: https://standards.oftrust.net/v1/Context/Link/BelongsTo/  | Yes | string |
| identityContext | query | The identity context to search for. The context MUST end with a forward slash /.  | Yes | string |
| linkDirection | query | The direction to traverse from the building, one of "IN" or "OUT". When using "IN" it means that the `BelongsTo` links are incoming links towards the Building: (Building) <-- BelongsTo -- (Storey) When using "OUT" it means that the `BelongsTo` links are outgoing from the Building (please note that this is just an example, the data model for buildings and storeys are IN): (Building) -- BelongsTo --> (Storey)  | Yes | string |
| maxDepth | query | The traversal max depth. This means that e.g. maxDepth=3 does three link hops in the traversal: (Building) <-- BelongsTo -- (Storey) <-- BelongsTo -- (Room) <-- BelongsTo -- (Sensor) If searching for `Sensors` but given maxDepth of 2, nothing will be returned since there are 3 links between the building and sensors. This value must be between 1 and 5, but defaults to 2.  | Yes | integer |
| offset | query | The offset used for pagination. Defaults to 0, meaning starting from the first record. Given an offset of 10 means that the next 10 records are returned.  | Yes | integer |
| limit | query | How many records to return, used for pagination. Defaults to 20 records. Given a limit of 100 will return 100 records. This value must be between 1 and 100.  | Yes | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 |  |
| 404 |  |
| 422 |  |
| 500 |  |

<!-- Converted with the swagger-to-slate https://github.com/lavkumarv/swagger-to-slate -->
