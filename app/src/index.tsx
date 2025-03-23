import { Form } from 'react-router'

export default function Index() {
    return (
        <div className="grid grid-cols-1 px-4 pt-6 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4">
            <div className="col-span-full mb-4 xl:mb-2">
                <div className="p-6">
                    <button
                        type="button"
                        className="cursor-not-allowed rounded-lg bg-blue-400 px-5 py-2.5 text-center text-sm font-medium text-white dark:bg-blue-500"
                        disabled
                    >
                        Disabled button
                    </button>
                    <Form method="post" action="/logout">
                        <button type="submit">Logout</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
