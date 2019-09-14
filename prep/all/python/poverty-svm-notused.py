
# ############################################ Support Vector Machine ###################################################
# Pre-process the data to standardize or normalize it, otherwise the grid search will take much longer
# Create a SVC classifier and train it.

print("----------------------")
print('Support Vector Matching (SVM)')

# https://towardsdatascience.com/scale-standardize-or-normalize-with-scikit-learn-6ccc7d176a02
# Normalizer works on the rows, not the columns.

# StandardScaler and normalize were declared in skeleton

# https://scikit-learn.org/stable/modules/preprocessing.html
#from sklearn import preprocessing
#data_normalized = preprocessing.normalize(scaler.transform(data), norm='l2')

# StandardScaler(copy=True, with_mean=True, with_std=True)
scaler = StandardScaler()

# "Test it on the test set to get final estimate of the performance you can expect on new data."
x_test_normalized = normalize(scaler.fit_transform(x_test), norm='l2')
x_train_normalized = normalize(scaler.fit_transform(x_train), norm='l2')

# Following from link provided in Piaza
# https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html

start_time  = time.time() # datetime.datetime.now()
svc = SVC(gamma="scale")

parameters = {'kernel':('linear', 'rbf'), 'C':[.01, .1, 1]} # FASTER

# return_train_score needed for 'mean_train_score'
grid_search = GridSearchCV(svc, parameters, cv=10, return_train_score=True, n_jobs=-1) #  n_jobs=-1 runs on all processors

print("SVM parameters:")
for key,val in parameters.items():
    print (key, ": ", val)

print("\nA processor timeout error may occur since n_jobs=-1 is used to run on all processors.\nOkay to ignore timeout / memory leak error.\n")
# Full error: UserWarning: A worker stopped while some jobs were given to the executor.
# This can be caused by a too short worker timeout or by a memory leak.

grid_search.fit(x_train_normalized, y_train) # .round() is temp



# Test its accuracy on the training set using the accuracy_score method.
# Test its accuracy on the test set using the accuracy_score method.

y_pred_train_svm = grid_search.predict(x_train_normalized)
y_pred_test_svm = grid_search.predict(x_test_normalized)

print("\nSVM Training Accuracy:" + str(accuracy_score(y_train, y_pred_train_svm)))
print("SVM Testing Accuracy:" + str(accuracy_score(y_test, y_pred_test_svm)))



# Tune the hyper-parameters 'C' and 'kernel' (use rbf and linear).
#       Print the best params, using .best_params_, and print the best score, using .best_score_.


# GET BEST  and BEST SCORE

# SVM - Highest mean testing/cross-validated accuracy (best score):   Use x_test_normalized
# SVM - Mean train score: 
# SVM Mean fit time: 

end_time = time.time() # datetime.datetime.now()
print ('SVM Done. Time Cost: %d\n' % (end_time - start_time))

sorted(grid_search.cv_results_.keys()) # Does not display anything.

print("SVM Best parameters set:")
best_parameters=grid_search.best_estimator_.get_params()
for param_name in sorted(parameters.keys()):
    print("%s: %r" % (param_name, best_parameters[param_name]))

print("\n\rHighest mean testing/cross-validated accuracy (best score): %0.3f" % grid_search.best_score_)

# Does not change
print("SVM - Mean train score: " + str(grid_search.cv_results_.get("mean_train_score")));

# Changes every time
print("SVM Mean fit time: " + str(grid_search.cv_results_.get("mean_fit_time")));

print("rf_tune Mean fit time: " + str(rf_tune.cv_results_.get("mean_fit_time")));


# Display all (includes two above)
#print("\nSVM grid_search.cv_results_ dict:");
#for key,val in grid_search.cv_results_.items():
#    print (key, ":\n", val)
#print("\n");


# #######Principal Component Analysis ##########

# Perform dimensionality reduction of the data using PCA.
# Set parameters n_component to 10 and svd_solver to 'full'. Keep other parameters at their default value.
# Print the following arrays:
# - Percentage of variance explained by each of the selected components
# - The singular values corresponding to each of the selected components.

print("\n\r----------------------")
print("Principal Component Analysis (PCA)")

# Linear dimensionality reduction using Singular Value Decomposition (SVD) 
# of the data to project it to a lower dimensional space.

# Piaza: Decomposition performed on the whole X to get the principal components over the entire dataset.

# Eigenvectors (aka: characteristic vectors) are a special set of vectors associated with a linear system of equations 
# (i.e., a matrix equation) for computing the best unique features to describe the samples.

# Pokemon sample
# http://benalexkeen.com/principle-component-analysis-in-python/

# Reducing features down to 10 principle components as stated in instructions above.
pca = PCA(n_components=10,svd_solver='full')
#pca = PCA(copy=True, iterated_power='auto', n_components=2, random_state=None, svd_solver='full', tol=0.0, whiten=False)

pca.fit(data) # Use whole dataset based on Piaza.

# 'PCA' object has no attribute 'predict'
#y_pred_test_pca = pca.predict(x_test)
#print('PCA Test Accuracy: ' + str(accuracy_score(y_test, y_pred_test_pca))) # Was 0.8916332888295505

#for param_name in sorted(pca.important_features.keys()):
#    print("\t%s: %r" % (param_name, pca.explained_variance_[param_name]))

X_pca = pca.transform(data)
print("original shape:   ", data.shape)
print("transformed shape:", X_pca.shape)

print("\npca.explained_variance_ratio_ " + str(pca.explained_variance_ratio_))
#print("pca.components_ " + str(pca.components_))

print("\npca.singular_values_ " + str(pca.singular_values_))



