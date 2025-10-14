# Notes

publications --> PublicationList.js
** add thumbnails to ./public/papers/ (width = 200 is best)

Bio and profile --> ProfileSection.js

Navigation URLs ---> Navigation.js

Updates --> updates.js

Global CSS --> GlobalStyles.js


## local dev
npm install

npm run dev

## deploy on Netlify
Commit changes
https://github.com/cuong3/cuongpage-netlify-starter
Go to Netiffy https://app.netlify.com/sites/cuongnguyenhci/overview
Login with github
Deploy --> trigger deploy --> Deploy site


# Set personal remote
try `ssh -T git@github.com-personal` first

should see
```
Hi cuong3! You've successfully authenticated, but GitHub does not provide shell access
```

if not, add `IdentitiesOnly yes` to Host github.com-personal

then

```
git remote add personal git@github.com-personal:cuong3/cuongpage-netlify-starter.git

# Push to personal
git push personal main
```
