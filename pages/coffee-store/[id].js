import { useRouter } from "next/router";
import Link from "next/link";


const CoffeeStore = () => {
    const router = useRouter();
    console.log(router)
    return (
        <div>
            coffee store{router.query.id}
            <Link href="/">
              <a>← Back to home</a>
            </Link>
        </div>
    );
};

export default CoffeeStore;