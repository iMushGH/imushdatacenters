Why we can't move binaries here

This repository has images under `public/cctv/`. To better organize product images, we recommend moving product-specific images to `public/products/`.

Manual steps (run locally on your machine):

1. Create the target directory:

```bash
mkdir -p public/products
```

2. Copy or move product images (example):

```bash
# copy
cp public/cctv/door_bell.jpg public/products/door_bell.jpg
# or move
mv public/cctv/door_bell.jpg public/products/door_bell.jpg
```

3. Verify the files exist:

```bash
ls -la public/products
```

4. If you use git, add and commit the moved files:

```bash
git add public/products/door_bell.jpg
git rm public/cctv/door_bell.jpg # if you moved
git commit -m "Move product images to public/products"
```

Notes

- Binary files are not modified by the automated editor; please run the above commands locally to move or copy them.
- After moving, the app already references `/products/door_bell.jpg` in product pages.
