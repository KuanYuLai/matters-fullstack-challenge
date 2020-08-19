import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";

const CREATE_QUERY = gql`
  mutation AddArticle($title: String!, $content: String!) {
    addArticle(input: { title: $title, content: $content }) {
      _id
    }
  }
`;

const Form = () => {
  let input_title, input_content;

  return (
    <Mutation mutation={CREATE_QUERY}>
      {(addArticle, { onCompleted, loading, error, data }) => (
        <div className="container">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              addArticle({
                variables: {
                  title: input_title.value,
                  content: input_content.value,
                },
              });
            }}
          >
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id="Title"
                placeholder="Title..."
                required="True"
                ref={(value) => (input_title = value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                className="form-control"
                id="Content"
                style={{ resize: "none" }}
                rows="25"
                placeholder="Content..."
                required="True"
                ref={(value) => (input_content = value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {loading ? (
            alert("Upload completed") ? (
              console.log("Alert displayed")
            ) : (
              <Redirect
                to={{ pathname: "/", state: { UploadComplete: true } }}
              />
            )
          ) : (
            console.log(" Null 2")
          )}
          {error && alert("Error submiting article. Please try again later")}
        </div>
      )}
    </Mutation>
  );
};
export default Form;
