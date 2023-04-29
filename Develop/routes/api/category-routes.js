const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
try{
  const allCategory = await Category.findAll({
    include: [{ model: Product } ]
  });
  res.status(200).json(allCategory);
}
catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {

  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [ { model: Product } ]
    });
    if(!categoryData) {
      res.status(400).json({ message: "Category not found with that ID"});
      return;
    }
    res.status(200).json(categoryData);
  }
  catch (err) { 
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  try {
    const locationData = await Category.create(
    {
      category_name: req.body.category_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  const getID = await Category.update(
    {
      category_name: req.body.category_name
    }, {
    where: {
      id: req.params.id,
    }
    })
  if(!getID) {
    res.status(404).json({ message: 'No Catgeory found with that id found' });
    return;
  }
  res.status(200).json(getID);
}
catch (err) {
  res.status(500).json(err);
}
  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
      
    });
    if(!categoryData) {
      res.status(404).json({ message: 'No Catgeory found with that id found' });
      return;
    }
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
