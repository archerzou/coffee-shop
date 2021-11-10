import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from "../../data/coffee-stores.json";

export async function getStaticProps(staticProps) {
    const params = staticProps.params;
  
    const coffeeStores = await fetchCoffeeStores();
    const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
      return coffeeStore.id.toString() === params.id; //dynamic id
    });
    return {
      props: {
        coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
      },
    };
}

export async function getStaticPaths() {
    const coffeeStores = await fetchCoffeeStores();
    const paths = coffeeStores.map((coffeeStore) => {
      return {
        params: {
          id: coffeeStore.id.toString(),
        },
      };
    });
    return {
      paths,
      fallback: true,
    };
}

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