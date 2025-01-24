import Link from "next/link";
import getUser from "./getUser";

const withAuthPrivate = async ({ children }) => {
    const { email } = await getUser() || {};

    if (email) {
        return children;
    };

    return <Link href="/login"></Link>;
}
withAuthPrivate.displayName = "MyComponent";
export default withAuthPrivate;