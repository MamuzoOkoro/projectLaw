-- CreateTable
CREATE TABLE "authModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "avatarID" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "token" TEXT,
    "role" TEXT NOT NULL,
    "roleID" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "authModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userModel" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comments" TEXT NOT NULL,
    "like" INTEGER NOT NULL,
    "reply" TEXT NOT NULL,

    CONSTRAINT "userModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lawModel" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "reply" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imageID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "lawModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authModel_email_key" ON "authModel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "authModel_roleID_key" ON "authModel"("roleID");

-- AddForeignKey
ALTER TABLE "lawModel" ADD CONSTRAINT "lawModel_userID_fkey" FOREIGN KEY ("userID") REFERENCES "userModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
