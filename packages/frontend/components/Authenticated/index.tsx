import { Query } from "react-apollo";
import { ME_QUERY } from "../../graphql/queries";
import Login from "../Login";

const Authenticated = (props: any) => (
  <Query query={ME_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>Please Sign In before continuing...</p>
            <Login />
          </div>
        );
      }

      return props.chidren;
    }}
  </Query>
);

export default Authenticated;
