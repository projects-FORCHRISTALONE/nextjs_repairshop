// BY GOD'S GRACE ALONE

import {db} from "./index";
import {migrate} from "drizzle-orm/neon-http/migrator"

const main = async () => {
    try{
        await migrate(db, {
            migrationsFolder: 'db/migrations'
        })
        console.log("Migration completed")
    } catch(err) {
        console.error('Error during migration: ', err)
        process.exit(1)
    }
}

main()