import { test, expect } from '@playwright/test';

const { LoginPage } = require('../pages/LoginPage')
const users = require('./data/users.json'); // Adjust the path as necessary



// Test: Add a new user in Admin section after login      
test (' create a new user for testing the functionality', async({page})=>{

   
 await page.loginAs('admin');

    // Go to Admin page
    await page.getByRole('link', { name: 'Admin' }).click();       

});