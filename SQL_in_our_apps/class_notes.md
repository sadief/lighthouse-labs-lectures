

## LIST

```sql
SELECT * FROM <db>
```


## READ
```sql
SELECT * FROM <db> WHERE id = $1
```

## CREATE
```sql
INSERT INTO <db> (<column1>, <column2>) VALUES ($1, $2);
```

## UPDATE 
```sql
UPDATE <db> SET <column> WHERE id = $1;
```

## DELETE
```sql
DELETE FROM <db> WHERE id = $1;
```