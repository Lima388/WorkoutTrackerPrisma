-- CreateTable
CREATE TABLE "exercises" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "exercise_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sets" (
    "id" SERIAL NOT NULL,
    "weekid" INTEGER NOT NULL,
    "exerciseid" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL DEFAULT 1,
    "weight" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "sets_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weeks" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "week_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "exercises_name_key" ON "exercises"("name");

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_fk0" FOREIGN KEY ("weekid") REFERENCES "weeks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_fk1" FOREIGN KEY ("exerciseid") REFERENCES "exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
