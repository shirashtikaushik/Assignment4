/* Write a Program to convert an array of objects to an object
	based on a given key */


    const convert = (arr,key) => {
        // Write your code here
        return Object.assign(arr.map(o => ({ [o[key]]: o })));
    }
    
    console.log(convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id'));
    
    /* For example,
    INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
    OUTPUT - {
                '1': {id: 1, value: 'abc'},
                '2': {id: 2, value: 'xyz'}
             }


            */ 