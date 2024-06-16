import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

const UsersTable = () => {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;

  if (!users.length) return <Empty resourceName="User" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Role</th>
        <th>Status</th>
        <th>Operations</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable