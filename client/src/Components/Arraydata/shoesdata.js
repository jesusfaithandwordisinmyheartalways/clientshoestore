


import adult_simple_shoe from '../Images/adult simple shoe .png'
import adult_simple_shoe_two from '../Images/adult simple shoe two.png'
import adult_simple_shoe_three from '../Images/adult simple shoe three.png'
import adult_simple_shoe_four from '../Images/adult simple shoe four.png'
import kid_simple_shoe from '../Images/kid simple shoe .png'
import kid_simple_shoe_two from '../Images/kid simple shoe two.png'
import kid_simple_shoe_three from '../Images/kid simple shoe three.png'
import kid_simple_shoe_four from '../Images/kid simple shoe four.png'
import men_simple_shoe from '../Images/men simple shoe.png'
import men_simple_shoe_two from '../Images/men simple shoe three.png'
import men_simple_shoe_three from '../Images/men simple shoe four.png'
import men_second_simple_shoe from '../Images/men_second_simple_shoe.png'
import men_second_simple_shoe_two from '../Images/men_second_simple_shoe_two.png'
import men_second_simple_shoe_three from '../Images/men_second_simple_shoe_three.png'
import men_third_simple_shoe from '../Images/men_third_simple_shoe.png'
import men_third_simple_shoe_two from '../Images/men_third_simple_shoe_two.png'
import men_third_simple_shoe_three from '../Images/men_third_simple_shoe_thrid.png'



import women_simple_shoe from '../Images/women simple shoe.png'
import women_simple_shoe_two from '../Images/women simple shoe two.png'
import women_simple_shoe_three from '../Images/women simple shoe three.png'
import women_simple_shoe_four from '../Images/women simple shoe four.png'
import women_second_simple_shoe from '../Images/women_second_simple_shoe.png'
import women_second_simple_shoe_two from '../Images/women_second_simple_shoe_two.png'
import women_second_simple_shoe_three from '../Images/women_second_simple_shoe_three.png'
import women_second_simple_shoe_four from '../Images/women_second_simple_shoe_four.png'
import women_third_simple_shoe from '../Images/women_third_simple_shoe.png'
import women_third_simple_shoe_two from '../Images/women_third_simple_shoe_two.png'
import women_third_simple_shoe_three from '../Images/women_third_simple_shoe_three.png'




export const products = [
    {
        _id: "aaaaa",
        name: 'Women white shadow shoe',
        description: 'a white, shadow, shoe, comfort, fittable among females, worn usually in summertime, popular in the north east',
        price: 110.00,
        oldprice: 82.50,
        image: [women_simple_shoe, women_simple_shoe_two, women_simple_shoe_three, women_simple_shoe_four],
        hoverImage: women_simple_shoe_two,
        category: 'Women',
        subCategory: 'Women Shoes',
        sizes: ['W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14'],
        SKU_NUMBER: 'SL0019057U-M040',
        color: ['white shadow']
    },
    {
        _id: "aaaaf",
        name: 'Men Camel Grey & light brown shoe',
        description: 'a camel grey & light brown, shoe, comfort, fittable among men, worn usually in spring, popular in the western states',
        price: 231.00,
        oldprice: 173.25,
        image: [men_simple_shoe, men_simple_shoe_two, men_simple_shoe_three],
        hoverImage: men_simple_shoe_two,
        category: 'Men',
        subCategory: 'Men Shoes',
        sizes: ['M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17'],
        SKU_NUMBER: 'SL0115432U-M110',
        color: ['camel grey & light brown']
    },
    {
        _id: "aaaah",
        name: 'Adult Colorful shoe for all seasons',
        description: 'a colorful, shoe, comfort, fittable among adults, worn usually all year round, popular in all states',
        price: 831.00,
        oldprice: 623.25,
        image: [adult_simple_shoe, adult_simple_shoe_two, adult_simple_shoe_three, adult_simple_shoe_four],
        hoverImage: adult_simple_shoe_two,
        category: 'Adult',
        subCategory: 'Adult Shoes',
        sizes: ['A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20'],
        SKU_NUMBER: 'SL0098765U-M108',
        color: ['colorful']
    },
    {
        _id: "aaaab",
        name: 'Women red shadow shoe',
        description: 'a red, shadow, shoe, comfort, fittable among females, worn usually in different seasons, popular in the up north east',
        price: 120.00,
        oldprice: 90.00,
        image: [women_second_simple_shoe, women_second_simple_shoe_two, women_second_simple_shoe_three, women_second_simple_shoe_four],
        hoverImage: women_second_simple_shoe_two,
        category: 'Women',
        subCategory: 'Women Shoes',
        sizes: ['W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14'],
        SKU_NUMBER: 'SL0019058U-M041',
        color: ['red shadow']
    },
    {
        _id: "aaaac",
        name: 'Women light grey shoe',
        description: 'a light gray, shoe, comfort, fittable among females, worn usually in spring, popular in the midwestern states',
        price: 115.00,
        oldprice: 86.25,
        image: [women_third_simple_shoe, women_third_simple_shoe_two, women_third_simple_shoe_three],
        hoverImage: women_third_simple_shoe_two,
        category: 'Women',
        subCategory: 'Women Shoes',
        sizes: ['W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14'],
        SKU_NUMBER: 'SL0019060U-M043',
        color: ['light grey']
    },
    {
        _id: "aaaad",
        name: 'Men dark navy blue shoe',
        description: 'a dark navy blue, shoe, comfort, fittable among men, worn usually in spring, popular in the northern states',
        price: 215.00,
        oldprice: 161.25,
        image: [men_third_simple_shoe, men_third_simple_shoe_two, men_third_simple_shoe_three],
        hoverImage: men_third_simple_shoe_two,
        category: 'Men',
        subCategory: 'Men Shoes',
        sizes: ['M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17'],
        SKU_NUMBER: 'SL0137890U-M112',
        color: ['dark navy']
    },
    {
        _id: "aaaae",
        name: 'Men Black and brown shoe',
        description: 'a Black and brown, shoe, comfort, fittable among men, worn usually in spring, popular in the midwestern states',
        price: 220.00,
        oldprice: 165.00,
        image: [men_second_simple_shoe, men_second_simple_shoe_two, men_second_simple_shoe_three],
        hoverImage: men_second_simple_shoe_two,
        category: 'Men',
        subCategory: 'Men Shoes',
        sizes: ['M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17'],
        SKU_NUMBER: 'SL0126789U-M111',
        color: ['black', 'brown']
    },
    {
        _id: "aaaag",
        name: 'Kid Dark Green shoe',
        description: 'a dark green, shoe, comfort, fittable among kids, worn usually all year round, popular in all states',
        price: 531.00,
        oldprice: 398.25,
        image: [kid_simple_shoe, kid_simple_shoe_two, kid_simple_shoe_three, kid_simple_shoe_four],
        hoverImage: kid_simple_shoe_two,
        category: 'Kid',
        subCategory: 'Kid Shoes',
        sizes: ['K1', 'K1.5', 'K2', 'K2.5', 'K3', 'K3.5', 'K4', 'K4.5', 'K5'],
        SKU_NUMBER: 'SL0109876U-M109',
        color: ['dark green']
    }
];