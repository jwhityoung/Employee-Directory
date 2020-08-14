//Setting up table columns
export const columns = [

    {
        Header: 'First Name',
        accessor: 'firstName',
       filter: (rows, id, filterType) => rows.filter(row => row.values[id].startsWith(filterType)),
       
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Department',
        accessor: 'department',
    },
    {
        Header: 'Role',
        accessor: 'role',
    },
];
//Setting up table data
export const data = [
    {

        firstName: 'Sally',
        lastName: 'Stawberry',
        department: 'Human Resources',
        role: 'Director of HR'
    },
    {
        firstName: 'Dan',
        lastName: 'Date',
        department: 'Sales',
        role: 'Director of Sales'
    },
    {
        firstName: 'Melanie',
        lastName: 'Melon',
        department: 'Client Success',
        role: 'Director of Client Success'
    },
    {

        firstName: 'Alice',
        lastName: 'Apple',
        department: 'Marketing',
        role: 'Social Media Manager'
    },
    {
        firstName: 'Brett',
        lastName: 'Banana',
        department: 'Product',
        role: 'Software Developer'
    },
    {
        firstName: 'Candace',
        lastName: 'Canteloupe',
        department: 'Sales',
        role: 'Account Executive'
    },
    {

        firstName: 'Whitney',
        lastName: 'Watermelon',
        department: 'Client Success',
        role: 'Client Success Manger'
    },
    {
        firstName: 'Taylor',
        lastName: 'Tangerine',
        department: 'Product',
        role: 'Software Developer'
    },
    {
        firstName: 'Rita',
        lastName: 'Raspberry',
        department: 'Human Resources',
        role: 'Recruiting Coordinator'
    },
    {
        firstName: 'Ziggy',
        lastName: 'Zucchini',
        department: 'Human Resources',
        role: 'Vibe Director'
    },
    {
        firstName: 'Patty',
        lastName: 'Pineapple',
        department: 'Product',
        role: 'Product Manager'
    },
    {
        firstName: 'Olivia',
        lastName: 'Orange',
        department: 'Sales',
        role: 'Sales Development Representative'
    },
    {
        firstName: 'Lathan',
        lastName: 'Lemon-Lime',
        department: 'Legal',
        role: 'Director of Lawyering'
    },
];
