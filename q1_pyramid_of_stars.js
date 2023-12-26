const buildPyramid = (num) => {
	// Write your code here
        for (let i = 0; i < num; i++) {
                var output = '';
                for (let j =0; j < num - i; j++) output += ' ';
                for (let k = 0; k <= i; k++) output += '* ';
                console.log(output);  
        } 
};

buildPyramid(6)