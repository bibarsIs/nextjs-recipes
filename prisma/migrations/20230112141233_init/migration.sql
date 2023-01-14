-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "isAdded" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "instructions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdByUserId" INTEGER DEFAULT 1,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipesOnIngredients" (
    "ingredientId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "quantity" DECIMAL(65,30),

    CONSTRAINT "RecipesOnIngredients_pkey" PRIMARY KEY ("ingredientId","recipeId")
);

-- CreateTable
CREATE TABLE "_UserFavoritedRecipes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_title_key" ON "Ingredient"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_title_key" ON "Recipe"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFavoritedRecipes_AB_unique" ON "_UserFavoritedRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFavoritedRecipes_B_index" ON "_UserFavoritedRecipes"("B");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipesOnIngredients" ADD CONSTRAINT "RecipesOnIngredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipesOnIngredients" ADD CONSTRAINT "RecipesOnIngredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoritedRecipes" ADD CONSTRAINT "_UserFavoritedRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoritedRecipes" ADD CONSTRAINT "_UserFavoritedRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
