# Showing and Storing Form Data

Learning objectives
You know how to show submitted for data.
You know how to store submitted form data in a variable.
You know how to store submitted form data using Deno KV.

```curl
curl -X POST -d name="fahd" -d address="hakkunila" localhost:8000/addresses

```

d stand for data that is used to add data to the body of the response. 

# Storing submitted form data in a variable

Temporarily storing the submitted form data is straightforward. We can simply store the data in a variable that is accessible to the application. In the following example, we store the submitted data in a variable called data.

